<script lang="ts" setup>

</script>

<template>
     <el-main>
        <el-container>
            <el-aside :xs="8" :sm="6" :md="4" :lg="3" :xl="1"></el-aside>
            <el-main>
                <slot />
            </el-main>
        </el-container>
     </el-main>
</template>

<style>

</style>