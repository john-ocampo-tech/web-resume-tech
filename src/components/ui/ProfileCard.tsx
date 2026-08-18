/* ==================== SECTION 1: IMPORTS ==================== */
import type { Resume } from '../../types/resume';
import profilePic from '../../assets/frontprofile.png';

/* ==================== SECTION 2: TYPES ==================== */
interface ProfileCardProps {
  resume: Resume;
  onContactClick?: () => void;
}

/* ==================== SECTION 3: MAIN COMPONENT ==================== */
export const ProfileCard = ({ resume, onContactClick }: ProfileCardProps) => {
  return (
    <div style={{
      backgroundColor: '#fcfbf8',
      width: '300px',
      flexShrink: 0,
      overflow: 'hidden',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      borderRight: '1px solid #e4e1d7'
    }}>
      
      {/* --- SUB-SECTION: HOVER STYLES --- */}
      <style>{`
        .card-action-btn {
          position: relative;
          flex: 1;
          padding: 12px;
          border: none;
          background-color: transparent;
          font-weight: 600;
          cursor: pointer;
          font-size: 0.7rem;
          letter-spacing: 0.05em;
          color: #445b51;
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: center;
          box-sizing: border-box;
          outline: none;
          user-select: none;
          overflow: hidden;
          z-index: 1;
          transform: translateZ(0);
          will-change: color, transform;
          transition: 
            color 250ms cubic-bezier(0.25, 1, 0.5, 1),
            transform 150ms cubic-bezier(0.25, 1, 0.5, 1);
        }

        .card-action-btn::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 0%;
          background-color: #445b51;
          z-index: -1;
          transition: height 300ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .card-action-btn:hover {
          color: #ffffff !important;
        }

        .card-action-btn:hover::before {
          height: 100%;
        }

        .card-action-btn:active {
          transform: scale(0.95) translateZ(0) !important;
          transition-duration: 50ms !important;
        }
      `}</style>

      {/* --- SUB-SECTION: PROFILE IMAGE --- */}
      <div style={{ 
        flex: 1, 
        backgroundColor: '#f6f5f0', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        borderBottom: '1px solid #e4e1d7',
        overflow: 'hidden'
      }}>
        <img 
          src={profilePic} 
          alt={resume.name} 
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover' 
          }} 
        />
      </div>

      {/* --- SUB-SECTION: NAME & TITLE (Icons were removed from here) --- */}
      <div style={{ 
        padding: '24px 16px', 
        textAlign: 'center', 
        display: 'flex', 
        flexDirection: 'column', 
        flexShrink: 0
      }}>
        <h1 style={{ 
          fontSize: '1.35rem', 
          fontFamily: 'var(--font-display)',
          margin: '0 0 4px 0', 
          color: '#1d211e', 
          fontWeight: '500',
          letterSpacing: '-0.02em'
        }}>
          {resume.name}
        </h1>
        <p style={{ 
          color: '#5b7c6f', 
          fontWeight: '500', 
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          fontSize: '0.7rem',
          marginBottom: '12px' 
        }}>
          {resume.title}
        </p>
      </div>

      {/* ==================== SECTION 4: ACTION BUTTONS ==================== */}
      <div style={{ display: 'flex', borderTop: '1px solid #e4e1d7', flexShrink: 0, backgroundColor: '#dbe4de' }}>
        <a 
          href="/resume.pdf" 
          download={`${resume.name.replace(/\s+/g, '_')}_CV.pdf`}
          className="card-action-btn"
          style={{ borderRight: '1px solid #cbd7d0' }}
        >
          DOWNLOAD CV
        </a>

        <button 
          onClick={onContactClick}
          className="card-action-btn"
        >
          CONTACT ME
        </button>
      </div>
    </div>
  );
};

/* ==================== SECTION 5: HELPERS ==================== */
/* (SocialButton helper was removed from here) */