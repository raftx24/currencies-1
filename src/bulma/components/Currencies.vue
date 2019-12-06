<template>
    <a class="button"
        v-tooltip="tooltip ? currency.code : null"
        @click="next"
        v-if="currency">
        <span class="is-bold"
            v-if="symbol">
            {{ currency.symbol }}
        </span>
        <span class="is-bold"
            v-else>
            {{ currency.code }}
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
        symbol: {
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
            return this.currencies
                && this.currencies.find(({ id }) => id === this.value);
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
