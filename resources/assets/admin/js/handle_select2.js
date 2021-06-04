let getSelections = (route, target, modelId = null) => {
    $(target).select2({
        ajax: {
            minimumInputLength: 0,
            url: route,
            type: "GET",
            dataType: 'json',
            data: function (params) {
                return {
                    searchTerm: params.term, // search term
                    modelId: modelId
                };
            },
            processResults: function (response) {
                return {
                    results: response
                };
            },
        }
    });
}

export {getSelections}
