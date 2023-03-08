<template>
    <div style="padding: 15px;" >
        <div class="text-center" style="font-size: 65px; color: rgb(0 82 95)">WELCOME</div>
        <div class="" style="font-size: 65px; margin-left: 15px; color: cyan">
            
            TO
        
            <button class="t-btn btn btn-info ">
                <router-link :to="{ name: 'userbook' }" class="text-white nav-link">
                    Your StorageBook
                </router-link>
            </button>
        </div>
    </div>
    
</template>



<style scoped>
@import "@/assets/form.css";
</style>