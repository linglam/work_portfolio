
import React from 'react';
import type { Skill } from '../types';

const SkillBadge: React.FC<Skill> = ({ name }) => {
  return (
    <span className="bg-slate-800 text-sky-300 text-sm font-medium px-4 py-2 rounded-full shadow-sm">
      {name}
    </span>
  );
};

export default SkillBadge;
