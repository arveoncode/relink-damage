import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useStatsStore } from "@/stores/useStatsStore";

// Displays actual values instead of Human Readable Values
export const StatsDebug = () => {
  const stats = useStatsStore((state) => state);
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Stat</TableHead>
          <TableHead>Value</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>DMG Cap</TableCell>
          <TableCell>{stats.damageCap}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Normal DMG Cap</TableCell>
          <TableCell>{stats.normalDamageCap}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Skill DMG Cap</TableCell>
          <TableCell>{stats.skillDamageCap}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>SBA DMG Cap</TableCell>
          <TableCell>{stats.sbaDamageCap}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
