export default function Home() {
	return (
		<div className='px-4 py-12 max-w-2xl mx-auto'>
			<h1 className='text-3xl font-bold  mb-4 text-slate-800'>Welcome to my Auth App!</h1>
			<p className='mb-4 text-slate-700'>
				이것은 MERN (MongoDB, Express, React, Node.js) 스택을 사용하여 구축된 풀 스택 웹
				애플리케이션입니다. 이 애플리케이션은 사용자가 회원 가입, 로그인 및 로그아웃을 할 수 있도록
				하는 인증 기능을 포함하고 있으며, 인증된 사용자만이 액세스할 수 있는 보호된 경로에 접근할 수
				있도록 합니다.
			</p>
			<p className='mb-4 text-slate-700'>
				프런트엔드는 React로 구축되었으며 클라이언트 측 라우팅에는 React Router를 사용합니다.
				백엔드는 Node.js와 Express로 구축되었으며 데이터베이스로 MongoDB를 사용합니다. 인증은 JSON
				Web Tokens (JWT)를 사용하여 구현되었습니다.
			</p>
			<p className='mb-4 text-slate-700'>
				이 애플리케이션은 MERN 스택을 사용한 인증을 포함하는 풀 스택 웹 애플리케이션을 구축하기 위한
				템플릿으로 만들었습니다.. 여러분의 프로젝트에 템플릿으로 사용하시기를 환영합니다!
			</p>
		</div>
	);
}
