// https://uibakery.io/regex-library/phone-number

import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";
import { useAppDispatch, useAppSelector } from "../../components/app/hooks";
import { fetchAddress, getUser } from "../../slices/userSlice";
import { Order, clearCart, getCart } from "../../slices/cartSlice";
import CartEmpty from "../cart/CartEmpty";
import store from "../../store";

type Error = {
    phone?: string;
};

const isValidPhone = (str: string) =>
    /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
        str,
    );

const action = async ({ request }: { request: Request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    const order = {
        ...data,
        cart: JSON.parse(String(data.cart)),
        priority: data.priority === "on",
        estimatedDelivery: Date(),
        orderPrice: 147,
        // priorityPrice: 29,
    } as Order;
    const error: Error = {};
    if (!isValidPhone(String(data.phone))) {
        error.phone = "Вы ввели некорректный телефон";
    }
    if (Object.keys(error).length > 0) {
        return error;
    }
    const newOrder = await createOrder(order);
    store.dispatch(clearCart());
    return redirect(`/order/${newOrder.id}`);
};

const OrderCreate = () => {
    const cart = useAppSelector(getCart);
    const { address, status, error, position } = useAppSelector(getUser);
    const dispatch = useAppDispatch();
    // const [withPriority, setWithPriority] = useState(false);
    const { state } = useNavigation();
    const isSubmitting = state === "submitting";
    const formErrors = useActionData() as Error;
    const { name } = useAppSelector(getUser);

    if (!cart.length) return <CartEmpty />;

    return (
        <div className="mx-auto w-full max-w-screen-xl px-4 py-6">
            <h2 className="mb-8 text-xl font-semibold">
                Ready to order? Let's go!
            </h2>

            <Form method="POST">
                <div className="mb-5 grid grid-cols-[20%_1fr] gap-2 sm:flex-row sm:items-center">
                    <label>First Name</label>
                    <input
                        className="input grow"
                        type="text"
                        name="customer"
                        required
                        defaultValue={name}
                    />
                </div>

                <div className="mb-5 grid grid-cols-[20%_1fr] gap-2 sm:flex-row sm:items-center">
                    <label>Phone number</label>
                    <div className="grow">
                        <input
                            className="input w-full"
                            type="tel"
                            name="phone"
                            required
                        />
                    </div>
                </div>
                {formErrors?.phone && <p>Введите корректный номер телефона</p>}
                <div className="mb-5 grid grid-cols-[20%_1fr] gap-2 sm:flex-row sm:items-center">
                    <label>Address</label>
                    <div className=" grow">
                        <div className="relative">
                            <input
                                className="input w-full"
                                type="text"
                                name="address"
                                required
                                placeholder="Введите ваш адрес"
                                defaultValue={address}
                            />
                            <input
                                type="hidden"
                                name="position"
                                value={
                                    position?.latitude && position.longitude
                                        ? `latitude: ${position.latitude}, longitude: ${position.longitude}`
                                        : ""
                                }
                            />
                            <div className="absolute right-2 top-2/4 -translate-y-2/4">
                                <Button
                                    type="small"
                                    onClick={(evt) => {
                                        evt.preventDefault();
                                        dispatch(fetchAddress());
                                    }}
                                >
                                    {status === "error"
                                        ? "Retry get address"
                                        : "Get address"}
                                </Button>
                            </div>
                        </div>
                        {status === "error" && (
                            <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
                                {error}
                            </p>
                        )}
                    </div>
                </div>
                <input type="hidden" name="cart" value={JSON.stringify(cart)} />
                <div className="mb-12 flex items-center gap-5">
                    <input
                        type="checkbox"
                        name="priority"
                        id="priority"
                        className="checkbox"
                        // value={withPriority}
                        // onChange={(e) => setWithPriority(e.target.checked)}
                    />
                    <label className="font-medium" htmlFor="priority">
                        Want to yo give your order priority?
                    </label>
                </div>

                <div>
                    <Button
                        type="primary"
                        disabled={isSubmitting ? true : false}
                    >
                        {isSubmitting ? "Submitting..." : "Order now"}
                    </Button>
                </div>
            </Form>
        </div>
    );
};

OrderCreate.action = action;

export default OrderCreate;
