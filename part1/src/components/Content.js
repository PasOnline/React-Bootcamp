
import { Part } from './Part'
import { Total } from './Total'

export const Content = () => {
    const exercises1 = 10;
    const exercises2 = 7;
    const exercises3 = 14;

    return (
        <>
            <Part part1 = 'Fundamentals of React' exercises1 = {exercises1} />
            <Part part2 = 'Using props to pass data' exercises2 = {exercises2} />
            <Part part3 = 'State of a component' exercises3 = {exercises3} />       
            <Total exercises1 = {exercises1} exercises2 = {exercises2} exercises3 = {exercises3}/>
        </>
    )
}