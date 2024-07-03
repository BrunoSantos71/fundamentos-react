export function If(props: any) {

    console.log(props)

    if (props.test) {
        return props.children

    } else {
        return false
    }
}

export const Else = (props: any) => props.children