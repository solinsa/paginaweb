import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate required fields
    const { nombre, email, organizacion, industria, mensaje, privacidad } = body;

    if (!nombre || !email || !organizacion || !industria || !mensaje || !privacidad) {
      return NextResponse.json(
        { error: 'Todos los campos son requeridos' },
        { status: 400 }
      );
    }

    // In production, this would send an email or save to CMS
    console.log('Contact form submission:', {
      nombre,
      email,
      organizacion,
      industria,
      mensaje,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { success: true, message: 'Solicitud recibida correctamente' },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
