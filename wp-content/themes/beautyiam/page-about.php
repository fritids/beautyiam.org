<?php get_header(); ?>

<section id="about" class="page">
	<?php get_template_part( 'loop', 'page' ); ?>
	
	<!-- <div id="about-one">
		<div class="container">
			<div class="row">
				<div class="span12 text-center">
					
					
					<div id="line-one" class="serif">beauty <span class="i-am">i am</span> is the</div>
					<div id="line-two">aspiring actor</div>
					<div class="plus">+</div>
					<div id="line-three">passiona<span>t</span>e musician</div>
					<div class="plus">+</div>
					<div id="line-four">obsessive screenplay writer.</div>
					<div id="line-five"><p>We are a group of people pursing various careers in Hollywood.</p></div>
					
					<div id="line-six" class="serif">we are too<span class="sans">&nbsp;&nbsp;blond&nbsp;&nbsp;</span> 
						<div class="anyClass">
							<ul class="sans">
								<li>fat</li>
								<li>thin</li>
								<li>tall</li>
								<li>short</li>
								<li>blond</li>
								<li>young</li>
								<li>old</li>
							</ul>
						</div>.
					</div>
					
					<div id="line-seven" class="text-right">(You name it)</div>
					<p class="span10 offset1">We've all experienced first-hand the pressure and scrutiny that it takes to pursue a career in Hollywood.<br>  We've been told we're too fat, too thin, too tall, too short, too blonde, too sharp, too flat, too young, too old.</p>
					<div class="clearfix"></div>
					<div id="curlies">
						<div id="line-eight" class="serif">the good news is</div>
						<p class="span10 offset1">we've come out on the other end more determined, more inspired and with a greater sense of identity that can not be shaken.  We've discovered that in order to succeed and remain healthy, we need to know ourselves and remain loyal to who we are.  We have also found that building relationships with like minded artist helps build stability as you realize your not alone. It also provides the motivation one needs to maintain tenacity along the way. We believe the things that helped us, can help others pursing a career in media and enterainment.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	<div id="about-two" class=" calypso-bg">
		<div class="container">
			<div class="row">
				<div class="span12 text-center">
					<div id="line-nine">On this journey we all need is</div>
					<div id="line-ten">Community</div>
					<div id="line-eleven">&omega;&iota;&sigmaf;&delta;&omicron;<span>&omega;</span></div>
					<div id="line-twelve">(Yeah, sometimes wisdom feels like greek)</div>
					<div id="line-thirteen">Grounded in ident<span>?</span>ty</div>
					<p class="span10 offset1">Those who are in pursuit need a community of support from those who are in the trenches with them.  They need wisdom and counsel from those who have gone before, and most importantly, they need to remain grounded in their identity.</p>
					<div class="clearfix"></div>
					<div id="line-fourteen">the actor / musician / writer / model / comedian / director / designer / dreamer</div>
					<div id="line-fifteen" class="serif">Reach your dreams without sacrificing</div>
					<div id="line-sixteen"> y_u_S_lf.</div>
				</div>
			</div>
		</div>
	</div> -->
	
	<div id="about-offerings" class="container">
		<div class="row">
			<div id="about-fitness" class="span3"></div>
			<div id="about-wellness" class="span3"></div>
			<div id="about-spirit" class="span3"></div>
			<div id="about-counsel" class="span3"></div>
		</div>
		<div class="row">
			<div class="span12 sans">
				<h3 class="text-center">We offer a variety of groups, counsel, and classes that address the mental, physical and spiritual needs of those pursing their dreams in this industry.</h3>
			</div>
		</div>
		<div class="row">
			<div class="span12">
				<h1 class="serif">We are Beauty <span class="i-am">i am</span>.</h1>
			</div>
		</div>
	</div>
	
	<?php rewind_posts(); ?>
	<div id="team" class="container">
		<?php query_posts( 'post_type=team' ); ?>
		<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
		<div class="row team-member">
			<div class="span2 author-headshot">
				<img src="<?php the_field('member_headshot'); ?>" class="img-circle" alt="<?php the_title(); ?>">
			</div>
			<div class="span6 member-details">
				<div class="member-position sans"><?php the_field('team_position'); ?></div>
				<div class="member-name sans"><?php the_title(); ?></div>
				<p class="member-description">
					<?php the_field('member_bio_excerpt'); ?>
				</p>
			</div>
			<div class="span2 offset1 member-actions">
				<div class="full-profile">
					<a href="<?php the_permalink(); ?>" class="btn btn-black">Full Profile</a>
				</div>
				<div class="post-twitter">
					<a href="http://twitter.com/<?php the_field('member_twitter'); ?>">@<?php the_field('member_twitter'); ?></a>
				</div>
			</div>
		</div><!-- .team-member -->
		<?php endwhile; endif; ?>	
	</div>
	
</section><!-- #page -->

<?php get_footer(); ?>
