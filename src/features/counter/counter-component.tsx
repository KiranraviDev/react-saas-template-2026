import { useState } from 'react';
import { Minus, Plus, RotateCcw, TrendingUp } from 'lucide-react';
import { useAppSelector, useAppDispatch } from '@/store/hook';
import { increment, decrement, incrementByAmount, reset } from './counter-slice';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card";

export function Counter() {
    const count = useAppSelector((state) => state.counter.value);
    const dispatch = useAppDispatch();
    const [amount, setAmount] = useState<number>(10);

    return (
        <Card className="w-full max-w-md shadow-2xl border-zinc-800 bg-zinc-950 text-zinc-100">
            <CardHeader className="space-y-1">
                <div className="flex items-center gap-2">
                    <div className="p-2 bg-indigo-500/10 rounded-lg">
                        <TrendingUp className="w-5 h-5 text-indigo-400" />
                    </div>
                    <CardTitle className="text-2xl">Usage Metrics</CardTitle>
                </div>
                <CardDescription className="text-zinc-400">
                    Manage your current consumption limits.
                </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
                {/* Main Display */}
                <div className="flex flex-col items-center justify-center py-8 bg-zinc-900/50 rounded-2xl border border-zinc-800">
                    <span className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 mb-1">
                        Active Total
                    </span>
                    <span className="text-7xl font-black tabular-nums text-white">
                        {count}
                    </span>
                </div>

                {/* Quick Controls */}
                <div className="flex gap-4">
                    <Button
                        variant="outline"
                        className="flex-1 h-12 border-zinc-800 bg-zinc-900 hover:bg-zinc-800"
                        onClick={() => dispatch(decrement())}
                    >
                        <Minus className="w-4 h-4 mr-2" /> Decrement
                    </Button>
                    <Button
                        variant="outline"
                        className="flex-1 h-12 border-zinc-800 bg-zinc-900 hover:bg-zinc-800"
                        onClick={() => dispatch(increment())}
                    >
                        <Plus className="w-4 h-4 mr-2" /> Increment
                    </Button>
                </div>

                {/* Custom Amount */}
                <div className="flex gap-2">
                    <Input
                        // type="number"
                        value={amount}
                        onChange={(e) => setAmount(Number(e.target.value))}
                        // className="bg-zinc-900 border-zinc-800 focus-visible:ring-indigo-500"
                    />
                    <Button
                        className="bg-indigo-600 hover:bg-indigo-500 text-white"
                        onClick={() => dispatch(incrementByAmount(amount))}
                    >
                        Add Bulk
                    </Button>
                </div>
            </CardContent>

            <CardFooter>
                <Button
                    variant="ghost"
                    className="w-full text-zinc-500 hover:text-red-400 hover:bg-red-400/10"
                    onClick={() => dispatch(reset())}
                >
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Reset to Baseline
                </Button>
            </CardFooter>
        </Card>
    );
}
