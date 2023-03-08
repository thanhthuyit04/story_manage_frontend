<template>
    <div v-if="post" class="page t-edit my-3">
        <h4 class="text-center">Hiệu chỉnh Truyện</h4>
        <PostForm
            :post="post"
            @submit:post="updatePost"
            @delete:post="deletePost"
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
            post: null,
            message: "",
        };
    },
    methods: {
        async getPost(id) {
            try {
                this.post = await PostService.get(id);
            } catch (error) {
                console.log(error);
                // Chuyển sang trang NotFound đồng thời giữ cho URL không đổi
                this.$router.push({
                    name: "notfound",
                    params: {
                        pathMatch: this.$route.path.split("/").slice(1)
                    },
                    query: this.$route.query,
                    hash: this.$route.hash,
                });
            }
        },
        async updatePost(data) {
            try {
                await PostService.update(this.post._id, data);
                    this.$router.push({ name: "postbook" });
                } catch (error) {
                    console.log(error);
            }
        },
        async deletePost() {
            if (confirm("Bạn muốn xóa Truyện này?")) {
                try {
                    await PostService.delete(this.post._id);
                        this.$router.push({ name: "postbook" });
                    } catch (error) {
                        console.log(error);
                }
            }
        },
    },
    created() {
    this.getPost(this.id);
    this.message = "";
    },
};
</script>