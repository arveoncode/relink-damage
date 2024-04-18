import { SkillCalculatedTable } from "@/types/skill.types";
import { create } from "zustand";

interface SelectedRowsStore {
  selectedSkills: SkillCalculatedTable[];
  setSelectedSkills: (_selectedSkills: SkillCalculatedTable[]) => void;
}

export const useSelectedRowsStore = create<SelectedRowsStore>()((set) => ({
  selectedSkills: [],
  setSelectedSkills: (_selectedSkills: SkillCalculatedTable[]) =>
    set(() => ({ selectedSkills: _selectedSkills })),
}));
