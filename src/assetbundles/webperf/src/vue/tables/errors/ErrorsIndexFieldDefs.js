// Field definitions for ErrorsIndexTable.vue
export default [
    {
        name: '__slot:page-listing-display',
        sortField: 'url',
        title: 'Page',
        titleClass: 'center pageListingDisplay',
        dataClass: 'center',
        width: '30%',
    },
    {
        name: '__slot:sample-date',
        sortField: 'latestErrorDate',
        title: 'Last Error Date',
        titleClass: 'text-left',
        dataClass: 'text-left',
        width: '20%',
    },
    {
        name: '__slot:craft-errors',
        sortField: 'craftCount',
        title: 'Craft Errors',
        titleClass: 'text-right',
        dataClass: 'text-right',
        callback: 'countFormatter',
        width: '15%',
    },
    {
        name: '__slot:boomerang-errors',
        sortField: 'boomerangCount',
        title: 'JavaScript Errors',
        titleClass: 'text-right',
        dataClass: 'text-right',
        callback: 'countFormatter',
        width: '15%',
    },
    {
        name: '__slot:total-errors',
        sortField: 'cnt',
        title: 'Total Errors',
        titleClass: 'text-right',
        dataClass: 'text-right',
        callback: 'countFormatter',
        width: '15%',
    },
    {
        name: 'deleteLink',
        sortField: 'deleteLink',
        title: '',
        titleClass: 'text-center',
        dataClass: 'text-center',
        callback: 'deleteFormatter',
        width: '5%',
    },
];
