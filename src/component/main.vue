<template>
    <span
        :class="{
            'x-icon': true,
            'is-cover': isCover,
        }"
    >
        <svg class="x-icon__inner">
            <use :xlink:href="href"/>
        </svg>
    </span>
</template>

<script>
export default {
    name: 'XIcon',
    props: {
        name: String,
        isCover: Boolean,
    },
    computed: {
        href() {
            return `#${this.name}`;
        },
    },
};
</script>

<style>
.x-icon {
    display: inline-block;
    width: 16px;
    height: 16px;
    font-size: 0;
}

.x-icon.is-cover {
    width: 100%;
    height: 100%;
}

.x-icon .x-icon__inner {
    width: 100%;
    height: 100%;
}
</style>
