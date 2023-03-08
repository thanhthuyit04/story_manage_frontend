<template>
    <Form
        @submit="submitPost"
        :validation-schema="postFormSchema"
    >
        <div class="form-group">
            <label for="name"><b><i class="fa-solid fa-flag"></i> Tên truyện</b></label>
            <Field
                name="title"
                type="text"
                class="form-control"
                v-model="postLocal.title"
            />
            <ErrorMessage name="title" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="author"><b><i class="fa-solid fa-user"></i> Tác giả</b></label>
            <Field
                name="author"
                type="text"
                class="form-control"
                v-model="postLocal.author"
            />
            <ErrorMessage name="author" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="des"><b><i class="fa-solid fa-pen-to-square"></i> Mô tả</b></label>
            <textarea name="des" id="" cols="30" rows="5" class="mb-2 textarea form-control" v-model="postLocal.des"></textarea>

                <Field
                name="des"
                type="text"
                class="textarea form-control"
                v-model="postLocal.des"
                />
            <ErrorMessage name="des" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="image"><b><i class="fa-solid fa-image"></i> Hình</b></label>
            <Field
                name="image"
                type="url"
                class="form-control"
                v-model="postLocal.image"
            />
            <ErrorMessage name="image" class="error-feedback" />
        </div>

        <div class="form-group form-check">
            <input
                name="completed"
                type="checkbox"
                class="form-check-input"
                v-model="postLocal.completed"
            />
            <label for="completed" class="form-check-label">
                <strong>Hoàn thành</strong>
            </label>
        </div>

        <div class="form-group">
            <button class="t-btn btn btn-info">Lưu</button>
            <button
                v-if="postLocal._id"
                type="button"
                class="t-btn ml-2 btn btn-danger"
                @click="deletePost"
            >
                Xóa
            </button>
        </div>
    </Form>
</template>

<script>
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";

export default {
    components: {
    Form,
    Field,
    ErrorMessage,
    },
    emits: ["submit:post", "delete:post"],
    props: {
        post: { type: Object, required: true }
    },
    data() {
        const postFormSchema = yup.object().shape({
            title: yup
                .string()
                .required("Tên phải có giá trị.")
                .min(2, "Tên phải ít nhất 2 ký tự.")
                .max(50, "Tên có nhiều nhất 50 ký tự."),
            author: yup
                .string()
                .required("Tên phải có giá trị.")
                .max(50, "Tên có nhiều nhất 50 ký tự."),
            des: yup
                .string()
                .required("Nội dung.")
                .max(1000, "Nội dung tối đa 1000 ký tự."),
            image: yup
                .image
        });
        return {
            // Chúng ta sẽ không muốn hiệu chỉnh props, nên tạo biến cục bộ
            // postLocal để liên kết với các input trên form
            postLocal: this.post,
            postFormSchema,
        };
    },
    methods: {
        submitPost() {
            this.$emit("submit:post", this.postLocal);
        },
        deletePost() {
            this.$emit("delete:post", this.postLocal.id);
        },
    },
};
</script>

<style scoped>
@import "@/assets/form.css";
</style>