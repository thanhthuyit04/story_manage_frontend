import { createWebHistory, createRouter } from "vue-router";
import UserBook from "@/views/UserBook.vue";
import PostBook from "@/views/PostBook.vue";

const routes = [
    {
        path: "/users",
        name: "userbook",
        component: UserBook,
    },

    {
        path: "/:pathMatch(.*)*",
        name: "notfound",
        component: () => import("@/views/NotFound.vue"),
    },

    {
        path: "/users/:id",
        name: "user.edit",
        component: () => import("@/views/UserEdit.vue"),
        props: true // Truyền các biến trong $route.params vào làm props
    },

    {
        path: "/adduser",
        name: "user.add",
        component: () => import("@/views/UserAdd.vue"),
        props: true // Truyền các biến trong $route.params vào làm props
    },

    //post
    {
        path: "/posts",
        name: "postbook",
        component: PostBook,
    },

    {
        path: "/posts/:id",
        name: "post.edit",
        component: () => import("@/views/PostEdit.vue"),
        props: true // Truyền các biến trong $route.params vào làm props
    },

    {
        path: "/addpost",
        name: "post.add",
        component: () => import("@/views/PostAdd.vue"),
        props: true // Truyền các biến trong $route.params vào làm props
    },

    {
        path: "/",
        name: "login",
        component: () => import("@/views/Login.vue"),
    },

];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
export default router;