<template>
    <x-row>
        <x-col :span="4">
            <people-double />
        </x-col>
        <x-col :span="4">
            <index />
        </x-col>
        <x-col :span="4">
            <file />
        </x-col>
    </x-row>
</template>

<script>
import XRow from './row.vue';
import XCol from './col.vue';
import PeopleDouble from '../../../lib/people-double';
import Index from '../../../lib/index';
import File from '../../../lib/file';

export default {
    name: 'App',
    components: {
        XRow,
        XCol,
        PeopleDouble,
        Index,
        File,
    },
};
</script>
