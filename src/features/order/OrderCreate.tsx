// https://uibakery.io/regex-library/phone-number

import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";
import { useSelector } from "react-redux";
import { InitialState } from "../../userSlice";

type Error = {
    phone?: string;
};

const isValidPhone = (str: string) =>
    /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
        str,
    );

const fakeCart = [
    {
        pizzaId: 12,
        name: "Mediterranean",
        quantity: 2,
        unitPrice: 16,
        totalPrice: 32,
    },
    {
        pizzaId: 6,
        name: "Vegetale",
        quantity: 1,
        unitPrice: 13,
        totalPrice: 13,
    },
    {
        pizzaId: 11,
        name: "Spinach and Mushroom",
        quantity: 1,
        unitPrice: 15,
        totalPrice: 15,
    },
];

const cart = fakeCart;

const action = async ({ request }: { request: Request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    const order = {
        ...data,
        cart: JSON.parse(String(data.cart)),
        priority: data.priority === "on",
    };
    const error: Error = {};
    if (!isValidPhone(String(data.phone))) {
        error.phone = "Вы ввели некорректный телефон";
    }
    if (Object.keys(error).length > 0) {
        return error;
    }
    const newOrder = await createOrder(order);
    return redirect(`/order/${newOrder.id}`);
};

const OrderCreate = () => {
    // const [withPriority, setWithPriority] = useState(false);
    const { state } = useNavigation();
    const isSubmitting = state === "submitting";
    const formErrors = useActionData() as Error;
    const userName = useSelector(
        ({ user }: { user: InitialState }) => user.name,
    );
    return (
        <div className="w-full px-4 py-6">
            <h2 className="mb-8 text-xl font-semibold">
                Ready to order? Let's go!
            </h2>

            <Form method="POST">
                <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
                    <label className="sm:basis-40">First Name</label>
                    <input
                        className="input grow"
                        type="text"
                        name="customer"
                        required
                        defaultValue={userName}
                    />
                </div>

                <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
                    <label className="sm:basis-40">Phone number</label>
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
                <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
                    <label className="sm:basis-40">Address</label>
                    <div>
                        <input
                            className="input w-full"
                            type="text"
                            name="address"
                            required
                            placeholder="Введите ваш адрес"
                        />
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
