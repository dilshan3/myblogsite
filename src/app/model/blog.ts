export interface Blog{
    id: number,
    title: string,
    date: Date,
    imgUrl: string,
    description: string,
    rating: number //added rating property to add star rating functionality
    starList ?: Boolean[]

}