<template>
    <div class="t-menu row">
        <div class="t-menu-left col-3">
            <div class="t-search">
            <InputSearch v-model="searchText" />
            </div>
            <div class="mt-3">
                <h4>
                    
                    <i class="fa-solid fa-bell"></i> Post
                </h4><hr>
                

                <div class="mt-3 ">
                    <button class="t-btn btn btn-sm btn-info mr-2" @click="refreshList()">
                        Làm mới
                    </button>
                    <button class="t-btn btn btn-sm btn-success mr-2" @click="goToAddPost">
                        <i class="fas fa-plus"></i> Thêm mới
                    </button>
                    <button
                        class="t-btn btn btn-sm btn-danger mr-2"
                        @click="removeAllPosts"
                    >
                        Xóa tất cả
                    </button><br>
                </div>
            </div>
        </div>  
        
        <div class="t-menu-right col-8
       
        ">
        
            <PostList
                    v-if="filteredPostsCount > 0"
                    :posts="filteredPosts"
                    v-model:activeIndex="activeIndex"
                    
                />
                <p v-else>Không có truyện nào.</p>

                
        </div> <hr>
        
    </div> 
    <div class="t-menu row">
        <div class="t-menu-left-bt col-3"></div>
        <div class="t-menu-right col-8">
                <div v-if="activePost">
                    <!-- <h4>
                        Chi tiết Truyện
                        <i class="fas fa-address-card"></i>
                    </h4> -->
                    <PostCard :post="activePost" />
                    <div class="float-right">
                        <router-link
                        :to="{
                        name: 'post.edit',
                        params: { id: activePost._id },
                        }"
                    >
                        <span class="mt-2 badge btn btn-info">
                            <i class="fas fa-edit"></i> Chỉnh sửa</span
                        >
                    </router-link>
                    </div>
                </div>
            </div>
    </div>
</template>
<script>
import PostCard from "@/components/PostCard.vue";
import InputSearch from "@/components/InputSearch.vue";
import PostList from "@/components/PostList.vue";
import PostService from "@/services/post.service";
export default {
    components: {
        PostCard,
        InputSearch,
        PostList,
    },
    data() {
        return {
            posts: [],
            activeIndex: -1,
            searchText: "",
        };
    },
    watch: {
        // Giám sát các thay đổi của biến searchText.
        // Bỏ chọn phần tử đang được chọn trong danh sách.
        searchText() {
            this.activeIndex = -1;
        },
    },
    computed: {
        // Chuyển các đối tượng post thành chuỗi để tiện cho tìm kiếm.
        postStrings() {
            return this.posts.map((post) => {
                const { image, title, author, des } = post;
                return [image, title, author, des].join("");
            });
        },
        // Trả về các post có chứa thông tin cần tìm kiếm.
        filteredPosts() {
            if (!this.searchText) return this.posts;
            return this.posts.filter((_post, index) =>
                this.postStrings[index].includes(this.searchText)
            );
        },
        activePost() {
            if (this.activeIndex < 0) return null;
            return this.filteredPosts[this.activeIndex];
        },
        filteredPostsCount() {
            return this.filteredPosts.length;
        },
    },
    methods: {
        async retrievePosts() {
            try {
                this.posts = await PostService.getAll();
            } catch (error) {
                console.log(error);
            }
        },
        refreshList() {
            this.retrievePosts();
            this.activeIndex = -1;
        },
        async removeAllPosts() {
            if (confirm("Bạn muốn xóa tất cả Liên hệ?")) {
                try {
                    await PostService.deleteAll();
                    this.refreshList();
                } catch (error) {
                    console.log(error);
                }
            }
        },
        goToAddPost() {
            this.$router.push({ name: "post.add" });
        },
    },
    mounted() {
        this.refreshList();
    },
};
</script>
<style scoped>
.page {
text-align: left;
max-width: 750px;
}
</style>