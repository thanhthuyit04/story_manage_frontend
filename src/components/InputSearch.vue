<script>
export default {
    props: {
        modelValue: { type: String, default: "" },
    },
    emits: ["submit", "update:modelValue"],
    methods: {
        updateModelValue(e) {
            this.$emit("update:modelValue", e.target.value);
        },
        submit() {
            this.$emit("submit");
        },
    },
};
</script>
<template>
    <div class="input-group">
        <input
            type="text"
            class="t-s1 form-control"
            placeholder="Nhập thông tin cần tìm"
            :value="modelValue"
            @input="updateModelValue"
            @keyup.enter="submit"
        />
        <div class="input-group-append">
            <button
                class="t-s2 btn btn-outline-secondary btn-info"
                type="button"
                @click="submit"
            >
            <i class="fa-solid fa-square-check"></i>
            </button>
        </div>
    </div>
</template>

