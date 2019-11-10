<template>
    <div class="wrapper">
        <div class="columns">
            <div class="column">
                <enso-select-filter class="box raises-on-hover"
                    source="administration.currencies.options"
                    label="shortName"
                    :name="i18n('From')"
                    v-model="filters.fromCurrencies.id"/>
            </div>
            <div class="column">
                <enso-select-filter class="box raises-on-hover"
                    source="administration.currencies.options"
                    label="shortName"
                    :name="i18n('To')"
                    v-model="filters.toCurrencies.id"/>
            </div>
            <div class="column is-5-desktop">
                <enso-date-filter class="box raises-on-hover"
                    :name="i18n('Date')"
                    default="today"
                    v-model="params.interval"
                    @update="
                        intervals.exchange_rates.date.min = $event.min;
                        intervals.exchange_rates.date.max = $event.max;
                    "/>
            </div>
        </div>
        <enso-table class="box is-paddingless raises-on-hover"
            id="rates"
            :filters="filters"
            :intervals="intervals"/>
        <filter-state :api-version="1"
            name="exchange-rates"
            :filters="filters"
            :intervals="intervals"
            :params="params"/>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import { EnsoDateFilter, EnsoSelectFilter } from '@enso-ui/filters/bulma';
import { FilterState } from '@enso-ui/filters/renderless';
import { EnsoTable } from '@enso-ui/tables/bulma';

export default {
    name: 'Index',

    components: {
 EnsoDateFilter, EnsoSelectFilter, FilterState, EnsoTable 
},

    inject: ['i18n'],

    data: () => ({
        filters: {
            fromCurrencies: { id: null },
            toCurrencies: { id: null },
        },
        intervals: {
            exchange_rates: {
                date: { min: null, max: null },
            },
        },
        params: { interval: null },
    }),

    computed: {
        ...mapState(['enums']),
    },
};
</script>
