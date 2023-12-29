<template>
    <x-row>
        <x-col>
            <x-icon name="people-double"></x-icon>
        </x-col>
    </x-row>
</template>

<script>
import XRow from './row.vue';
import XCol from './col.vue';

export default {
    name: 'App',
    components: {
        XRow,
        XCol,
    },
};
</script>
