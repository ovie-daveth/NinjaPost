import React from 'react'
import { Link } from 'react-router-dom'
import avatar from '../assets/avatar.jpg'
import {AiFillLike} from 'react-icons/ai'
import {FcLike} from 'react-icons/fc'
import Comments from '../components/chat/Comments'
import SimilarPosts from '../components/blogpost/SimilarPosts'
import NewsLetter from '../components/blogpost/NewsLetter'

const BlogPost = () => {
  return (
    <div className='flex items-start gap-2 px-8 mt-2'>
        <div className='relative rounded-md bg-gray-800 w-[75%]'>
            <div className="block w-full border-b-2 border-gray-400 mb-6">
                <img src="https://media.istockphoto.com/id/1180225161/photo/hes-a-dedicated-programmer.jpg?s=612x612&w=0&k=20&c=-QE2cRBDVcvyBqlXMiKVfp7tYeXQQCv2Gi8OixIoFjU="
                className='w-full h-[500px] rounded-t-md'
                alt="post" />
            </div>
            <h1 className="mb-6 text-4xl font-semibold px-6">The golden template for react development (The Nigeria Setting)</h1>
            <div className="flex items-center justify-between gap-2 mb-6 w-full px-6 font-semibold text-gray-300">
                <div className="flex gap-2 items-center justify-between ">
                    <img src={avatar} alt="avatar"
                    width="40px"
                    className='rounded-full'
                    />
                    <div className=' flex flex-col'>
                        <p className='hover:text-gray-500 cursor-pointer transition ease-in-out'><Link to="/chat">Ovie</Link></p>
                        <small>Posted on July 3, 2023</small>
                    </div>
                </div>
                <div className="flex gap-4 items-center">
                    <p className="flex gap-2 text-xl"><span className='cursor-pointer'><FcLike /> </span><span className='text-md'>44</span></p>
                    <p className="flex gap-2 text-xl"><span className='cursor-pointer'><AiFillLike /> </span><span className='text-md'>44</span></p>
                </div>
            </div>
            <div className="flex gap-2 flex-wrap px-6 bg-clip-text text-orange-500 ">
                <p class="hover:text-orange-400"><Link to="/group">#css</Link></p>
                <p class="hover:text-orange-400"><Link to="/group">#tutorial</Link></p>
                <p class="hover:text-orange-400"><Link to="/group">#beginners</Link></p>
                <p class="hover:text-orange-400"><Link to="/group">#javascript</Link></p>
                <p class="hover:text-orange-400"><Link to="/group">#react</Link></p>
                <p class="hover:text-orange-400"><Link to="/group">#firebase</Link></p>
            </div>
            <div className="block my-6 px-6 text-justify leading-relaxed">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem harum accusantium excepturi ducimus quam tenetur earum minima? Unde, alias? Expedita qui modi laboriosam neque impedit repellat ex hic quia quibusdam saepe doloribus, rerum cupiditate repudiandae suscipit, vel id in excepturi ipsam reprehenderit quo inventore consectetur officiis sapiente dolorem! Doloremque repudiandae aspernatur, facere, dignissimos necessitatibus ad hic magnam deleniti nobis atque consequuntur cumque omnis veniam inventore doloribus sunt, vel ullam porro asperiores eius quia iste illum. Tempora fugiat quam soluta et maiores incidunt facilis ab quod. A, numquam officia laborum aliquam veniam facere, ea odio placeat dicta modi possimus consequatur tenetur inventore maxime voluptate quas quaerat alias qui nostrum voluptatibus assumenda. Iusto, debitis cumque veritatis, nesciunt corporis aspernatur nemo modi ullam impedit error fugit incidunt tempora architecto expedita soluta beatae, eaque eum atque? Alias enim maxime quasi repellendus, doloribus eum cupiditate rem optio culpa aliquid aspernatur ea, nulla sint eaque ut nam animi doloremque necessitatibus provident laudantium. Minima iusto perferendis sint incidunt, quisquam numquam culpa suscipit impedit dicta atque, fugiat repudiandae dolores commodi tempora. Labore animi nisi sint sit nam. A quibusdam quae ipsum id repellat consequuntur corporis nostrum at amet beatae, molestias placeat illo atque voluptatem, laborum quos. Explicabo facilis minus dignissimos doloremque minima, suscipit aut sint facere at aperiam voluptatem illo aspernatur dolorem optio blanditiis quos numquam veniam repellat velit nisi ipsam quam, pariatur nulla omnis? Facere expedita cupiditate perferendis optio nulla ratione harum libero ab delectus omnis illo voluptatibus accusantium, consectetur in hic porro minima ipsum pariatur sunt dicta eius totam atque, itaque veritatis. Minima harum, reiciendis pariatur nam voluptatibus aperiam facere, commodi ipsum recusandae veritatis quod. Neque voluptatem repudiandae blanditiis? Accusantium inventore doloremque totam iure similique a, doloribus laborum odit voluptas labore, provident, esse sapiente fugiat iusto voluptatibus et eveniet facilis tempore quos reiciendis ad nam numquam. Quis cum quod eveniet vel tempore dolores odit quaerat delectus a, alias, eius praesentium mollitia quas voluptates obcaecati. Maiores unde officia voluptate, quidem ratione velit assumenda quas deleniti illo ex quae consequuntur quo sapiente atque aperiam. Id consequuntur repudiandae tempora sunt voluptas, neque esse quam quo aperiam deserunt, ea, quidem libero minus. Laborum ut modi sapiente cumque nam, magnam provident alias, facilis praesentium dolorum necessitatibus optio natus quia, iure aperiam. Iste dolores enim pariatur ad eius cupiditate? Aliquam blanditiis expedita consequatur! Blanditiis dolor commodi rerum suscipit amet maiores optio consequatur laudantium sed molestias minus aperiam repellendus in quo, laborum nemo magni libero facilis quidem maxime! Animi blanditiis autem ipsum atque totam, consequatur consectetur quasi, tempora odit laboriosam, ullam veritatis molestiae pariatur cum aliquam fugit voluptas mollitia? Dolor delectus sequi nisi, sed dignissimos recusandae blanditiis temporibus molestias nulla maiores magni atque non inventore deserunt corporis quisquam, at sint sapiente. Mollitia aspernatur minus porro totam sapiente maxime autem impedit eum sit ducimus soluta in voluptate, corrupti assumenda vitae aut excepturi quae illo? Laboriosam porro iure quisquam alias nesciunt blanditiis. Voluptatum vel expedita voluptate commodi, in incidunt voluptates voluptas delectus maxime. Dolore eaque dolorem laudantium ipsum deleniti tempore expedita. Eveniet necessitatibus tempora dolorum excepturi. Libero laudantium, mollitia beatae perferendis, placeat debitis dignissimos cupiditate aut corporis labore tempore, deserunt aspernatur ullam atque assumenda explicabo voluptates officiis dicta vel dolores id. Earum eius doloribus iure. Quaerat qui, incidunt rerum saepe pariatur, illo nam tenetur facere aliquam, facilis sed sunt nesciunt quod. Dignissimos assumenda impedit corrupti necessitatibus perspiciatis ipsa veritatis nihil beatae ratione exercitationem, fugiat sint reprehenderit quaerat magni. Dicta, possimus quisquam ut aliquid voluptate sunt quis iusto qui tempore optio impedit dolore eius corporis rerum itaque eaque esse sequi illum magni facilis quia quas! Optio a excepturi odit modi dolorum libero! Sed minima, eligendi laboriosam corporis repellendus nisi error quibusdam, ullam illo fugiat fugit magni. Aperiam, a illo eligendi id, et aliquid distinctio minima nam at, ab hic. Veritatis aperiam aliquid perspiciatis, sunt, corporis incidunt hic quibusdam nam laboriosam vero ab ratione numquam voluptatem? Aspernatur hic, dicta sequi laboriosam dolorum tempora. Suscipit dolorum harum dicta maxime atque, aut illo vel repellat, amet voluptatum modi, rerum distinctio recusandae totam alias repellendus ducimus officiis animi! Quam a nisi voluptatum consequuntur officiis itaque odio facere aut nam beatae asperiores adipisci, pariatur excepturi rerum? Quaerat id doloribus veniam eveniet inventore, doloremque, minus aliquid veritatis reprehenderit error maiores rerum earum distinctio ratione optio, voluptatem delectus ullam nesciunt? Veniam omnis obcaecati ratione animi necessitatibus soluta perspiciatis, sequi eius ducimus dolorum quos atque quas explicabo, adipisci expedita optio veritatis nam porro iure illo inventore reprehenderit magni nemo? Soluta cum optio dicta facere, rem non, quae eaque ratione neque atque ex illum fuga, sit quaerat at fugit officiis repellendus totam voluptatibus velit vitae placeat. Sequi, molestiae quos sit possimus rem, ab, animi cumque earum ducimus facere laboriosam recusandae officia placeat eos iste? Debitis eum distinctio modi doloribus esse tenetur, aliquam minima asperiores, rerum reprehenderit nihil quisquam officia ullam cumque at corrupti perferendis placeat?</p>
            </div>
            <div className="block border-4 border-gray-3 rounded-sm my-6">
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/xNRJwmlRBNU" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen={true}
            className='w-full'
            ></iframe>
            </div>
            <div className="flex flex-col gap-2 px-6">
                <h1 className='underline'>Essentil Links</h1>
                <p>Youtube Channel: <Link className='text-red-500 text-sm hover:text-red-400' to="https://www.youtube.com/@ADesignerWhoCodes" >https://www.youtube.com/@ADesignerWhoCodes</Link></p>
                <p>Portfilio: <Link className='text-red-500 text-sm hover:text-red-400' to="https://www.daveton.vercel-app" >https://www.daveton-vercel.app</Link></p>
            </div>
            <div className="flex items-start gap-2 px-6 mt-6">
                <img src={avatar} alt="commentPhoto" 
                className='rounded-full w-[40px]'
                />
                <textarea name="comment" id="comment" cols="4" rows="2" placeholder='Add to the discussion'
                className=' w-full bg-black placeholder:text-gray-400 px-3 pt-3 rounded-md'
                ></textarea>
            </div>
            <div className="block px-6 mt-6">
                <Comments />
            </div>
        </div>
        <div className='flex flex-col gap-2 w-[25%]'>
            <SimilarPosts />
            <NewsLetter />
        </div>
    </div>
  )
}

export default BlogPost
