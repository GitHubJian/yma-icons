<script>
export default {
    name: 'XCol',
    props: {
        span: {
            type: Number,
            default: 24,
        },
        tag: {
            type: String,
            default: 'div',
        },
        offset: Number,
        pull: Number,
        push: Number,
    },
    computed: {
        gutter() {
            let parent = this.$parent;
            while (parent && parent.$options.componentName !== 'XRow') {
                parent = parent.$parent;
            }

            return parent ? parent.gutter : 0;
        },
    },
    render(h) {
        let classList = [];
        let style = {};

        if (this.gutter) {
            style.paddingLeft = this.gutter / 2 + 'px';
            style.paddingRight = style.paddingLeft;
        }

        ['span', 'offset', 'pull', 'push'].forEach(prop => {
            if (this[prop] || this[prop] === 0) {
                classList.push(
                    prop !== 'span'
                        ? `x-col-${prop}-${this[prop]}`
                        : `x-col-${this[prop]}`
                );
            }
        });

        return h(
            this.tag,
            {
                class: ['x-col', classList],
                style,
            },
            this.$slots.default
        );
    },
};
</script>

<style lang="scss">
@import './mixin.scss';

[class*='x-col-'] {
    float: left;
    box-sizing: border-box;
}

.x-col-0 {
    display: none;
}

@for $i from 0 through 24 {
    .x-col-#{$i} {
        width: (1 / 24 * $i * 100) * 1%;
    }

    .x-col-offset-#{$i} {
        margin-left: (1 / 24 * $i * 100) * 1%;
    }

    .x-col-pull-#{$i} {
        position: relative;
        right: (1 / 24 * $i * 100) * 1%;
    }

    .x-col-push-#{$i} {
        position: relative;
        left: (1 / 24 * $i * 100) * 1%;
    }
}
</style>
