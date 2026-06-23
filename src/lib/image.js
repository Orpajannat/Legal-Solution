export const getImageUrl = (path) => {
    if (!path || path === "null") {
        return "/images/no-image-available.png";
    }
    // const cleaned = path.replace("public/", "");
    return `${process.env.NEXT_PUBLIC_BASE_URL}/${path}`;
};