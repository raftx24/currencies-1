<template>
    <a class="button is-warning"
        @click="next">
        <span class="is-bold">
            {{ currency.symbol }}
        </span>
    </a>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'Currencies',

    props: {
        value: {
            type: Number,
            default: null,
        },
        readonly: {
            type: Boolean,
            default: false,
        },
    },

    computed: {
        ...mapState(['enums']),
        ...mapState('local', ['currencies']),
        default() {
            return this.currencies.find(({ isDefault }) => isDefault);
        },
        currency() {
            return this.currencies.find(({ id }) => id === this.value);
        },
        index() {
            return this.currencies.findIndex(({ id }) => id === this.value);
        },
    },

    created() {
        if (!this.value) {
            this.$emit('input', this.default.id);
        }
    },<template>
    <a class="button is-warning"
        v-tooltip="tooltip ? currency.shortName : null"
        @click="next">
        <span class="is-bold">
            {{ currency.symbol }}
        </span>
    </a>
</template>

<script>
import { mapState } from 'vuex';
import { VTooltip } from 'v-tooltip';

export default {
    name: 'Currencies',

    directives: { tooltip: VTooltip },

    props: {
        value: {
            type: Number,
            default: null,
        },
        readonly: {
            type: Boolean,
            default: false,
        },
        tooltip: {
            type: Boolean,
            default: false,
        },
    },

    computed: {
        ...mapState(['enums']),
        ...mapState('local', ['currencies']),
        default() {
            return this.currencies.find(({ isDefault }) => isDefault);
        },
        currency() {
            return this.currencies.find(({ id }) => id === this.value);
        },
        index() {
            return this.currencies.findIndex(({ id }) => id === this.value);
        },
    },

    created() {
        if (!this.value) {
            this.$emit('input', this.default.id);
        }
    },

    methods: {
        next() {
            if (this.readonly) {
                return;
            }

            const index = this.index === this.currencies.length - 1
                ? 0
                : this.index + 1;

            this.$emit('input', this.currencies[index].id);
        },
    },
};
</script>


    methods: {
        next() {
            if (this.readonly) {
                return;
            }

            const index = this.index === this.currencies.length - 1
                ? 0
                : this.index + 1;

            this.$emit('input', this.currencies[index].id);
        },
    },
};
</script>
