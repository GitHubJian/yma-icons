<template>
    <x-row>
        <x-col :span="4">
            <people-double/>
        </x-col>
    </x-row>
</template>

<script>
import XRow from './row.vue';
import XCol from './col.vue';
import PeopleDouble from '../../../lib/people-double';

export default {
    name: 'App',
    components: {
        XRow,
        XCol,
        PeopleDouble,
    },
};
</script>
