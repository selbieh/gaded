from rest_framework import filters



class categoryContainsFilter(filters.BaseFilterBackend):
    """
    Filter that only by category.
    """
    def filter_queryset(self, request, queryset, view):
        category=request.query_params.get('category',None)
        if category:
            #return queryset.filter(category__full_name_string__contains=request.query_params.get('category',None))
            return queryset.filter(category__full_name_string__contains=category)
        else:
            return queryset