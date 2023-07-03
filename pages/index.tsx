import React, { useEffect } from "react";
import { Select } from "antd";
import { fetchCircles } from "@redux/thunks";
import { useAppDispatch, useAppSelector } from "@redux/store";
import { Circle } from "@redux/slices";
const { Option } = Select;

const Home: React.FC = () => {
    const dispatch = useAppDispatch();
    const circles = useAppSelector((state: any) => state.circlesService.data);

    useEffect(() => {
        dispatch(fetchCircles({}));
    }, [dispatch]);

    return (
        <div>
            <Select style={{ width: 200 }}>
                {circles.map((circle: Circle) => (
                    <Option key={circle.id} value={circle.id}>
                        {circle.name}
                    </Option>
                ))}
            </Select>
        </div>
    );
};

export default Home;