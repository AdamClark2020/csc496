import { graphql } from 'gatsby'
import React from 'react'

const pageTemplate = props => {
    let IngredList = ""
    function makeList(item){
        IngredList += '<p>' + item + '<p>'
    }
    
    const data = {
        nodeFood: props.pageContext.data
    }
    //console.log(data);
    //console.log("Hello class i Just printed available data for this page");
    data.nodeFood?.ingredients.forEach((i => console.log(i)))

    data.nodeFood?.ingredients.forEach(makeList)
    console.log(data.nodefood?.mediaImage.mediaImage.url)


    const pageData = '<h4>' + data.nodeFood?.title + '<h4>\
    <img src=' + data.nodeFood?.mediaImage.mediaImage.url + '/>\
    <p>' + data.nodeFood?.difficulty + '</p>\
    <p>' + data.nodeFood?.cookingTime + '</p>\
    <p>' + data.nodeFood?.preparationTime + '</p>\
    <p>' + data.nodeFood?.numberOfServings + '</p>\
    <p>' + data.nodeFood?.ingredients + '</p>\
    <p>' + data.nodeFood?.recipeInstruction.processed + '<p>\
    <img src=' + data.nodeFood?.mediaImage.mediaImage.url + '/>';

    return(
        <>
        <div dangerouslySetInnerHTML={{__html: pageData}}/>
        <img src={data.nodeFood?.mediaImage.mediaImage.url}/>
        </>
        
    )
}
export default pageTemplate