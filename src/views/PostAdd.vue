<template>
    <div v-if="post" class="page t-edit my-3">
        <h4 class="text-center">Thêm Truyện</h4>
        <PostForm
            :post="post"
            @submit:post="addPost"
        />
        <p>{{ message }}</p>
    </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostService from "@/services/post.service";

export default {
    components: {
        PostForm,
    },
    props: {
        id: { type: String, required: true },
    },
    data() {
        return {
            post: {},
            message: "",
        };
    },
    methods: {
        async addPost(data) {
            try {
                await PostService.create(data);
                    this.$router.push({ name: "postbook" });
                } catch (error) {
                    console.log(error);
            }
        },
    },
};
</script>
