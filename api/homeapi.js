import axios from "axios";
import { API_URL } from "utils/data";

// hero section api
export const HeroSectionApi = async () => {
    try {
        return await axios
            .get(`${API_URL}api/v1/cms/hero_section_home`)
            .then((res) => res.data)
            .catch((e) => console.log(e));
    } catch (e) {
        console.log(e)
    }
}
export const BlogResponseApi = async () => {
    try {
        return await axios
            .get(`${API_URL}api/v1/cms/latest_blogs`)
            .then((res) => res.data)
            .catch((e) => console.log("blog api error " + e));
    } catch (e) {
        console.log(e)
    }
}
export const HomeTestimonialAPI = async () => {
    try {
        return await axios
            .get(`${API_URL}api/v1/cms/testimonials`, {
                params: {
                    page: "home",
                },
            })
            .then((res) => res.data)
            .catch((e) => console.log("testimonial error" + e));
    } catch (e) {
        console.log(e)
    }
}
export const OfferSectionHomeAPI = async () => {
    try {
        return await axios
            .get(`${API_URL}api/v1/cms/offers_section_home`)
            .then((res) => res.data)
            .catch((e) => console.log("home offer error" + e));
    } catch (e) {
        console.log(e)
    }
}
export const GetYourFixAPI = async (city) => {
    try {
        return await axios
            .get(`${API_URL}api/v1/categories_by_cities`, {
                params: {
                    city: city,
                },
            })
            .then((res) => res.data)
            .catch((e) => console.log("get your fix error" + e));
    } catch (e) {
        console.log(e)
    }
}

