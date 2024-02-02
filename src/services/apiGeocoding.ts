const getAddress = async ({
    latitude,
    longitude,
}: {
    latitude: number;
    longitude: number;
}) => {
    const res = await fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`
    );
    if (!res.ok) throw Error("Failed getting address");

    return await res.json();
};

export default getAddress;
