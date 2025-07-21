import { NextRequest, NextResponse } from 'next/server';

// TODO: 실제 이메일 전송 서비스 연동 필요
// 현재는 기본 구조만 제공
export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // 입력 검증
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: '모든 필드를 입력해주세요.' },
        { status: 400 }
      );
    }

    // 이메일 형식 검증
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: '올바른 이메일 형식이 아닙니다.' },
        { status: 400 }
      );
    }

    // TODO: 실제 이메일 전송 로직 구현
    // 예시: Nodemailer, SendGrid, AWS SES 등 사용
    /*
    const transporter = nodemailer.createTransporter({
      // 이메일 서비스 설정
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: 'myggona@gmail.com',
      subject: `포트폴리오 문의: ${name}`,
      html: `
        <h3>새로운 연락 메시지</h3>
        <p><strong>이름:</strong> ${name}</p>
        <p><strong>이메일:</strong> ${email}</p>
        <p><strong>메시지:</strong></p>
        <p>${message}</p>
      `
    });
    */

    // 현재는 성공 응답만 반환
    console.log('Contact form submission:', { name, email, message });

    return NextResponse.json(
      { message: '메시지가 성공적으로 전송되었습니다.' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: '메시지 전송에 실패했습니다.' },
      { status: 500 }
    );
  }
}