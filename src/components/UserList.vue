<script>
export default {
    props: {
        users: { type: Array, default: [] },
        activeIndex: { type: Number, default: -1 },
    },
    emits: ["update:activeIndex"],
    methods: {
        updateActiveIndex(index) {
            this.$emit("update:activeIndex", index);
        }
    }
};
</script>
<template>
    <table class="table">
        <thead class="text-white" style="background: #0b595b">
            <tr>
            <th scope="col">Tên</th>
            <th scope="col">Email</th>
            <th scope="col">Địa chỉ</th>
            <th scope="col">SĐT</th>
            <th scope="col">Truy cập Post</th>
            </tr>
        </thead>

        <tbody>
            <tr
            class=""
                v-for="(user, index) in users"
                :key="user._id"
                :class="{ active: index === activeIndex }"
                @click="updateActiveIndex(index)"
            
            >
                <td style="color: darkcyan;">
                    {{ user.name }}
                </td>
                <td>
                    {{ user.email }}
                </td>
                <td>
                    {{ user.address }}
                </td>
                <td>
                    {{ user.phone }}
                </td>
                <td class="text-center">
                    <router-link v-if="user.access" :to="{ name: 'postbook' }" data-toggle="tooltip" data-placement="right" title="Chuyển đến trang post">
                        <i class="fa-solid fa-circle-check"></i>
                    </router-link>
                    <i v-else class="fa-regular fa-circle-xmark"></i>
                </td>
            </tr>
        </tbody>
    </table> <hr>


    <!-- <ul class="list-group">
        <li
            class="list-group-item"
            v-for="(user, index) in users"
            :key="user._id"
            :class="{ active: index === activeIndex }"
            @click="updateActiveIndex(index)"
        >
            {{ user.name }}
        </li>
    </ul> -->
</template>