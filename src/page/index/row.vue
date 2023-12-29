<script>
export default {
    name: 'XRow',
    componentName: 'XRow',
    props: {
        tag: {
            type: String,
            default: 'div',
        },
        gutter: Number,
        type: String,
        justify: {
            type: String,
            default: 'start',
        },
        align: String,
    },
    computed: {
        style() {
            const ret = {};

            if (this.gutter) {
                ret.marginLeft = `-${this.gutter / 2}px`;
                ret.marginRight = ret.marginLeft;
            }

            return ret;
        },
    },
    render(h) {
        return h(
            this.tag,
            {
                class: [
                    'x-row',
                    this.justify !== 'start'
                        ? `is-justify-${this.justify}`
                        : '',
                    this.align ? `is-align-${this.align}` : '',
                    {'x-row--flex': this.type === 'flex'},
                ],
                style: this.style,
            },
            this.$slots.default
        );
    },
};
</script>

<style lang="scss">
@import './mixin.scss';

@include b(row) {
    position: relative;
    box-sizing: border-box;

    @include clearfix;

    @include m(flex) {
        display: flex;
        &:before,
        &:after {
            display: none;
        }

        @include when(justify-center) {
            justify-content: center;
        }

        @include when(justify-end) {
            justify-content: flex-end;
        }

        @include when(justify-space-between) {
            justify-content: space-between;
        }

        @include when(justify-space-around) {
            justify-content: space-around;
        }

        @include when(align-top) {
            align-items: flex-start;
        }

        @include when(align-middle) {
            align-items: center;
        }

        @include when(align-bottom) {
            align-items: flex-end;
        }
    }
}
</style>
