<template>
    <div v-if="user" class="page t-edit my-3">
        <h4 class="text-center">Thêm Người dùng</h4>
        <UserForm
            :user="user"
            @submit:user="addUser"
        />
        <p>{{ message }}</p>
    </div>
</template>

<script>
import UserForm from "@/components/UserForm.vue";
import UserService from "@/services/user.service";

export default {
    components: {
        UserForm,
    },
    props: {
        id: { type: String, required: true },
    },
    data() {
        return {
            user: {},
            message: "",
        };
    },
    methods: {
        async addUser(data) {
            try {
                await UserService.create(data);
                    this.$router.push({ name: "userbook" });
                } catch (error) {
                    console.log(error);
            }
        },
    },
};
</script>
