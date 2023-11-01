import {graphql} from 'gatsby'
import React from 'react'

const pageTemplate = props => {
    const data = {
        nodeArticle: props.pageContext.data
    }
    console.log(data);
    console.log(props);

    return(
        <>
        <h4>{data.nodeArticle?.title}</h4>
        <p>{data.nodeArticle?.author.displayName}</p>
        <p>{data.nodeArticle?.body.processed}</p>
        <p>{data.nodeArticle?.mediaImage.url}</p>

        </>
    )
}