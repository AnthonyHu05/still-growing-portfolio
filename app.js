const chapters = {
  roots: {number:'01',kicker:'THE EXPERIENCES THAT GROUND ME', title:'Roots', subtitle:'Before I could reach upward, I learned how to hold my ground.', word:'resilience',next:'trunk', sections:[
    {title:'Where my story begins',text:'Every tree begins below the surface. My roots are the people, places, and experiences that have shaped how I see the world.',slot:'A formative memory',prompt:'To be added: a real moment, the people involved, and why it still matters.',photo:'A photograph from where the story began'},
    {title:'Growing through the storms',text:'Growth is not always visible. Sometimes it means staying steady, finding another way, or choosing to try again.',quote:'The storms are part of the story. So is the choice to keep growing.',slot:'A challenge that changed me',prompt:'To be added: what happened, how I responded, and what changed in the way I think or act.'},
    {title:'What I carry with me',text:'Resilience and the determination to keep growing are at the heart of the person I hope to become.',slot:'Values in everyday life',prompt:'To be added: a specific example of how these values guide my choices today.'}
  ]},
  trunk: {number:'02',kicker:'THE KNOWLEDGE THAT GIVES ME STRENGTH',title:'Trunk',subtitle:'Building a foundation, one question and one discovery at a time.',word:'curiosity',next:'branches',sections:[
    {title:'Learning with intention',text:'The trunk connects a tree’s roots to everything it reaches for. This chapter traces the knowledge and habits that support my growth.',slot:'Subjects that draw me in',prompt:'To be added: favorite subjects, relevant courses, and the questions that make me want to learn more.'},
    {title:'Following a question',text:'A question can become an investigation, an experiment, a piece of writing, or an entirely new way of seeing.',slot:'An academic project',prompt:'To be added: the original question, my process, my individual contribution, and a paper, presentation, or other result.',photo:'A page from a notebook, an experiment, or a piece of work'},
    {title:'Learning how to learn',text:'A strong foundation is built over time. Here, I will reflect on the study habits, feedback, and turning points that have helped me develop.',slot:'An academic turning point',prompt:'To be added: a concrete example of overcoming difficulty or changing my approach to learning.'}
  ]},
  branches: {number:'03',kicker:'CURIOSITY BEYOND THE CLASSROOM',title:'Branches',subtitle:'Reaching outward. Trying things. Finding connections.',word:'exploration',next:'light',sections:[
    {title:'Ideas in action',text:'Branches extend into new spaces. This is where I will share the clubs, projects, and activities through which I explore my interests.',slot:'A meaningful activity',prompt:'To be added: the activity, dates, my role, what I actually did, and what I learned.',photo:'A real moment from a club, project, or event'},
    {title:'Practice, challenge, discovery',text:'A finished result tells only part of a story. The preparation, collaboration, and revisions are worth sharing, too.',slot:'A competition or independent project',prompt:'To be added: the challenge, my contribution, the outcome, and a verified award or work sample if applicable.'},
    {title:'Growing with others',text:'Growth can also happen through the people we work with and the communities we become part of.',slot:'A contribution to a community',prompt:'To be added: who the work supported, my specific responsibilities, and any concrete results or reflections.'}
  ]},
  light: {number:'04',kicker:'THE POSSIBILITIES THAT CALL ME FORWARD',title:'Toward the Light',subtitle:'Not a finished map. A direction I want to keep exploring.',word:'possibility',next:'roots',sections:[
    {title:'Questions I want to follow',text:'Light gives growth a direction. This chapter is a place for the interests and unanswered questions that will guide my next steps.',slot:'An area I hope to explore',prompt:'To be added: potential academic interests, the experiences behind them, and a specific question I want to investigate.'},
    {title:'The learning I hope for',text:'The next chapter of my education is an opportunity to deepen my interests and encounter perspectives I have not yet imagined.',slot:'What I hope to find in college',prompt:'To be added: the kinds of courses, research, collaboration, or community experiences I want to pursue.'},
    {title:'The person I am becoming',text:'I want to remain grounded in what matters to me while staying open to what I have yet to discover.',quote:'Rooted in who I am. Growing into who I’ll be.',slot:'A direction for the future',prompt:'To be added: the contribution I hope to make and one realistic next step toward it.'}
  ]}
};
const home = document.querySelector('#home-view');
const detail = document.querySelector('#chapter-view');
function render(){
 const key = location.hash.slice(1); const data=chapters[key];
 document.querySelectorAll('.header nav a').forEach(a=>{if(a.hash===location.hash)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});
 if(!data){home.hidden=false;detail.hidden=true;document.title='Still Growing — A Personal Journey';if(key==='chapters')requestAnimationFrame(()=>document.querySelector('#chapters').scrollIntoView());else window.scrollTo(0,0);return;}
 home.hidden=true;detail.hidden=false;
 document.title=data.title+' — Still Growing';
 document.querySelector('#detail-index').textContent='CHAPTER '+data.number+' / 04';
 document.querySelector('#detail-kicker').textContent=data.kicker;
 document.querySelector('#detail-title').textContent=data.title;
 document.querySelector('#detail-subtitle').textContent=data.subtitle;
 document.querySelector('#detail-word').textContent=data.word;
 document.querySelector('#detail-toc').innerHTML=data.sections.map((s,i)=>'<a href="#'+key+'" data-scroll="story-'+i+'">'+s.title+'</a>').join('');
 document.querySelector('#detail-content').innerHTML=data.sections.map((s,i)=>'<section class="story-section" id="story-'+i+'"><h2>'+s.title+'</h2><p>'+s.text+'</p>'+(s.quote?'<blockquote>“'+s.quote+'”</blockquote>':'')+'<div class="content-slot"><span class="eyebrow">STORY TO COME</span><h3>'+s.slot+'</h3><p>'+s.prompt+'</p></div>'+(s.photo?'<div class="photo-slot" role="img" aria-label="Photo placeholder: '+s.photo+'"><span aria-hidden="true">＋</span><span>'+s.photo+'</span></div>':'')+'</section>').join('');
 document.querySelector('#next-chapter').href='#'+data.next;
 document.querySelector('#next-title').textContent=chapters[data.next].title;
 window.scrollTo({top:0,behavior:'instant'});
 document.querySelector('#detail-title').focus({preventScroll:true});
}
addEventListener('hashchange',render);
document.addEventListener('click',e=>{const link=e.target.closest('[data-scroll]');if(link){e.preventDefault();document.getElementById(link.dataset.scroll).scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});}});
render();
