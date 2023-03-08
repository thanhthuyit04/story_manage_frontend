<template>
    <div class="page t-edit my-3">
        <LoginForm
        @submit:login="login"
        />
    </div>
</template>

<script>
import LoginForm from "@/components/LoginForm.vue";
//import UserService from "@/services/user.service";
//import { parseStringStyle } from "@vue/shared";

export default {
    components: {
        LoginForm,
    },


    // data() {
    //     const FixedUser = {
    //         email: "thuyb1910151@gmail.com",
    //         password: "12345"
    //     }
    // },
    // methods: {
    //     async login(data) {
    //         const user = FixedUser
    //         if (email==user.email && password==user.password){
    //             try{
    //                 this.$router.push({ name: "postbook" });
    //             }  
    //             catch (error) {
    //                 console.log(error);
    //             }
    //         }
    //     },
    // },
}

// export default {
//     components: {
//         LoginForm,
//     },
//     props: {
//         name: { type: String, required: true },
//     },
//     data() {
//         return {
//             user: null,
//             message: "",
//         };
//     },
//     methods: {
//         async getUser(name) {
//             try {
//                 this.user = await UserService.get(name);
//             } catch (error) {
//                 console.log(error);
//                 // Chuyển sang trang NotFound đồng thời giữ cho URL không đổi
//                 this.$router.push({
//                     name: "notfound",
//                     params: {
//                         pathMatch: this.$route.path.split("/").slice(1)
//                     },
//                     query: this.$route.query,
//                     hash: this.$route.hash,
//                 });
//             }
//         },
//         async updateUser(data) {
//             try {
//                 await UserService.update(this.user._id, data);
//                     this.message = "Liên hệ được cập nhật thành công.";
//                 } catch (error) {
//                     console.log(error);
//             }
//         },
//         async deleteUser() {
//             if (confirm("Bạn muốn xóa Liên hệ này?")) {
//                 try {
//                     await UserService.delete(this.user._id);
//                         this.$router.push({ name: "userbook" });
//                     } catch (error) {
//                         console.log(error);
//                 }
//             }
//         },
//     },
//     created() {
//     this.getUser(this.id);
//     this.message = "";
//     },
// };
</script>
