import IntersectionObserver from 'intersection-observer-polyfill'

const withIntersectionObserver = ({
    tag = 'div',
    className = '',
    component,
    callback
}) => {

    const componentRef = useRef(null)
    const TagName = tag

    useEffect(() => {
        const intersectionObserver = new IntersectionObserver((entries) => {
            // when the target is out of view
            if (entries[0].intersectionRatio <= 0) return
            if (callback && callback instanceof Function) callback()
        })
        if (componentRef.current) intersectionObserver.observe(componentRef.current)
    }, [])

    if (!component) throw Error('We need the first paramter, it\'s just a <Component/>. :)')

    return (
        <TagName
            className={className}
            ref={componentRef}
        >
            {component}
        </TagName>
    )

}

export default withIntersectionObserver;
