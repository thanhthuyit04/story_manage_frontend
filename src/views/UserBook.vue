<template>
    <div class="t-menu row">
        <div class="t-menu-left col-3">
            <div class="t-search">
            <InputSearch v-model="searchText" />
            </div>
            <div class="mt-3">
                <h4>
                    
                    <i class="fa-solid fa-bell"></i> User
                </h4><hr>

                <div class="mt-3 ">
                    <button class="t-btn btn btn-sm btn-info mr-2" @click="refreshList()">
                         Làm mới
                    </button>
                    <button class="t-btn btn btn-sm btn-success mr-2" @click="goToAddUser">
                        <i class="fas fa-plus"></i> Thêm mới
                    </button>
                    <button
                        class="t-btn btn btn-sm btn-danger mr-2"
                        @click="removeAllUsers"
                    >
                         Xóa tất cả
                    </button>
                </div>
            </div>
        </div>

        <div class="t-menu-right col-8">
            <UserList
                v-if="filteredUsersCount > 0"
                :users="filteredUsers"
                v-model:activeIndex="activeIndex"
            />
            <p v-else>Không có liên hệ nào.</p>
        </div><hr>


    </div>

    <div class="t-menu row">
        <div class="t-menu-left-bt col-3"></div>
        <div class="t-menu-right col-8">
            <div v-if="activeUser">
                
                <UserCard :user="activeUser" />
                <router-link
                    :to="{
                    name: 'user.edit',
                    params: { id: activeUser._id },
                    }"
                >
                    <span class="span mt-2 badge btn btn-info">
                        <i class="fas fa-edit"></i> Chỉnh sửa</span
                    >
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
import UserCard from "@/components/UserCard.vue";
import InputSearch from "@/components/InputSearch.vue";
import UserList from "@/components/UserList.vue";
import UserService from "@/services/user.service";
export default {
    components: {
        UserCard,
        InputSearch,
        UserList,
    },
    data() {
        return {
            users: [],
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
        // Chuyển các đối tượng user thành chuỗi để tiện cho tìm kiếm.
        userStrings() {
            return this.users.map((user) => {
                const { name, email, address, phone } = user;
                return [name, email, address, phone].join("");
            });
        },
        // Trả về các user có chứa thông tin cần tìm kiếm.
        filteredUsers() {
            if (!this.searchText) return this.users;
            return this.users.filter((_user, index) =>
                this.userStrings[index].includes(this.searchText)
            );
        },
        activeUser() {
            if (this.activeIndex < 0) return null;
            return this.filteredUsers[this.activeIndex];
        },
        filteredUsersCount() {
            return this.filteredUsers.length;
        },
    },
    methods: {
        async retrieveUsers() {
            try {
                this.users = await UserService.getAll();
            } catch (error) {
                console.log(error);
            }
        },
        refreshList() {
            this.retrieveUsers();
            this.activeIndex = -1;
        },
        async removeAllUsers() {
            if (confirm("Bạn muốn xóa tất cả Liên hệ?")) {
                try {
                    await UserService.deleteAll();
                    this.refreshList();
                } catch (error) {
                    console.log(error);
                }
            }
        },
        goToAddUser() {
            this.$router.push({ name: "user.add" });
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