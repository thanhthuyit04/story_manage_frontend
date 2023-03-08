<template>
    <nav class="navbar navbar-expand navbar-dark" style="background: #005c6b;">
        <a href="/" class="navbar-brand">Ứng dụng Quản lý Truyện và Người dùng</a>
        <div class="ml-auto navbar-nav">
            <li class="nav-item">
                <router-link :to="{ name: 'postbook' }" class="nav-link">
                    Posts
                    <i class="fa-regular fa-bookmark"></i>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link :to="{ name: 'userbook' }" class="nav-link">
                    Users
                    <i class="fas fa-user"></i>
                </router-link>
            </li>
        </div>
    </nav>
</template>