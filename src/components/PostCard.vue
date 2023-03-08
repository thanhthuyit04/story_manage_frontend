<script>
export default {
    props: {
        post: { type: Object, required: true },
    },

    data: () => ({
        date: '',
        time: ''
    }),

    methods: {
        printDate: function () {
            return new Date().toLocaleDateString();
        },
        printTime: function () {
            return new Date().toLocaleTimeString();
        }
    },
    mounted: function() {
        this.date = this.printDate();
        this.time = this.printTime();
    },
};
</script>
<template>
    <div>
        <div class="font-weight-bold t-det-title p-1 text-center">
            {{ post.title }}
        </div>
        <div class="text-mute t-det-title p-1 text-center">
            {{ date }}, {{ time }}
        </div>
        <div class="t-det-title p-1 text-center">
            <img :src="post.image" alt="aa">
        </div>
        <div class="t-det-title p-1 text-center">
            <i v-if="post.completed" class="fa-regular fa-circle-check"></i>
            <i v-else class="fa-regular fa-circle-xmark"></i>
        </div>
        <div class="p-1">
            {{ post.des }}
        </div>
    </div>
</template>