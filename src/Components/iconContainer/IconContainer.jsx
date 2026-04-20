import Icon from "../icon/Icon"

const IconContainer = () => {
    return (
        <div className='flex gap-5 text-(--color-blanco) text-[27px] py-5 px-0 scale-[1.2]'>
            <Icon link={"https://github.com/facudaddese?tab=repositories"} ref={"devicon-github-original"} />
            <Icon link={"https://www.linkedin.com/in/facundodaddese/"} ref={"devicon-linkedin-plain"} />
        </div>
    )
}

export default IconContainer