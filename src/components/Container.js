import React, {Component} from 'react';

import Card from '../components/Post/Card/Card';
import Story from '../components/Post/Story/Story';
import Footer from '../components/Footer/Footer';
class Container extends Component {
    render() {
        return (
            <div className="container">
				<section className="featured-posts">
					<div className="section-title">
						<h2><span>Featured</span></h2>
					</div>
					<div className="card-columns listfeaturedtag">
						<Card 
							title="We're living some strange times"
							text="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
							author="Steve"
							img="assets/img/demopic/1.jpg"
						/>
						<Card 
							title="The beauty of this world is in your heart"
							text="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
							author="Jane"
							img="assets/img/demopic/2.jpg"
						/>
						<Card 
							title="Dreaming of Las Vegas Crazyness"
							text="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
							author="Mary"
							img="assets/img/demopic/3.jpg"
						/>
						<Card 
							title="San Francisco at its best view in all seasons"
							text="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
							author="Sal"
							img="assets/img/demopic/4.jpg"
						/>
					</div>
				</section>

				<section className="recent-posts">
					<div className="section-title">
						<h2><span>All Stories</span></h2>
					</div>
					<div className="card-columns listrecent">
						<Story
							title="Autumn doesn't have to be nostalgic, you know?"
							text="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
							author="Sal"
							img="assets/img/demopic/5.jpg"
						/>
						
						<Story
							title="Best galleries in the world with photos"
							text="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
							author="Sal"
							img="assets/img/demopic/6.jpg"
						/>
						<Story
							title="Little red dress and a perfect summer"
							text="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
							author="Sal"
							img="assets/img/demopic/7.jpg"
						/>
						<Story
							title="10 Things you should know about choosing your house"
							text="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
							author="Sal"
							img="assets/img/demopic/8.jpg"
						/>
						<Story
							title="Thinking outside the box can help you prosper"
							text="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
							author="Sal"
							img="assets/img/demopic/9.jpg"
						/>
						<Story
							title="Visiting the world means learning cultures"
							text="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
							author="Sal"
							img="assets/img/demopic/10.jpg"
						/>
					</div>
				</section>
				
				<Footer/>

            </div>
        );
    }
}

export default Container;
