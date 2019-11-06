export const check = (obj) => {
    switch (obj.id) {
        case `orderSet`:
            return {
                type: 'CHECK_BOX_SET',
                obj
            }

        case `emr`:
            return {
                type: 'CHECK_BOX_SET',
                obj
            }

        case `wellcom`:
            return {
                type: 'CHECK_BOX_SET',
                obj
            }

        case `website`:
            return {
                type: 'CHECK_BOX_SET',
                obj
            }

        case `weight`:
            return {
                type: 'CHECK_BOX_SET',
                obj
            }

        case `nutr`:
            return {
                type: 'CHECK_BOX_SET',
                obj
            }

        case `telo`:
            return {
                type: 'CHECK_BOX_SET',
                obj
            }

        default: return ({
            type: 'CHECK_BOX',
            obj
        })
    }
};