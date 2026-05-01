import {create} from 'zustand'
import axios from 'axios';


type Review = {
    id?: number
    $id?: string
    comment: string
    rating: number
    reviewer_name: string
}

export type ReviewsStore = {
    reviews: Review[]
    isLoading: boolean
    isError: boolean
    fetchReviews: () => Promise<void>
}

export const useReviews = create<ReviewsStore>((set) => ({
    reviews: [],
    isLoading: false,
    isError: false,
    fetchReviews: async (): Promise<void> => {
        set({ isLoading: true, isError: false })
        try {
            const response = await axios.get<Review[]>('http://localhost:9000/fetch_reviews',{
                headers: {
                    'Content-Type': 'application/json'
                }
                
            })

            

            set({ reviews: response.data, isLoading: false })
        } catch (error) {
            console.error("Error fetching reviews:", error)
            set({ isLoading: false, isError: true })
        }
    }

}))
//     name: string
//     job: string
//     text: string
// }

// export type ReviewsStore = {
//     reviews: Review[]
//     isLoading: boolean
//     isError: boolean
//     fetchReviews: () => Promise<void>
// }

// export const useReviews = create<ReviewsStore>((set) => ({
//     reviews: [],
//     isLoading: false,
//     isError: false,
//     fetchReviews: async () => {
//         set({ isLoading: true, isError: false })
//         try {
//             const reviews = reviewsData as Review[]
//             set({ reviews, isLoading: false })
//         } catch (error) {
//             console.error("Error fetching reviews:", error)
//             set({ isLoading: false, isError: true })
//         }
//     },
// }))

// export default useReviews




// // import {create} from 'zustand';
// // import data from '../app/data/review.json';

// // type ReviewsState ={
// //     id:number
// //     image:string
// //     name:string
// // }

// // type ReviewsStore = {
// //     reviews:ReviewsState[]
// //     isLoading:boolean
// //     isError:boolean
// //     fetchReviews:()=>void
// // }

// //  const useReviews = create<ReviewsStore>((set)=>({
// //     reviews:[],
// //     isLoading:false,
// //     isError:false,
// //     fetchReviews: async () => {
// //         set({isLoading:true, isError:false})
// //         try{
// //             const response = await fetch(data);
// //             console.log(response)
// //             if(!response.ok){
// //                 throw new Error("failed to load reviews")
// //             }
// //             const reviews: ReviewsState[] = await response.json()
// //             set({reviews, isLoading:false})
// //         }catch(error){
// //             console.error("Error fetching reviews:",error)
// //             set({isLoading:false, isError:true})
// //         }
// //     }
// // }
// // ))

// // export default useReviews;


