package com.carrot.trip.common;


import java.util.List;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Arrays;

public class PearsonUtil {

    /** * Calculation 2 individual list Pearson correlation coefficient * * @param x * @param y * @return */
    public static double getPearsonCorrelationScore(List x, List y) {

        if (x.size() != y.size()) {

            return -404; //throw new BaseException(CODE_SYSTEM_ERROR, " Pearson correlation coefficient calculation , The length of the correlation array is not equal ");
        }
        double[] xData = new double[x.size()];
        double[] yData = new double[x.size()];
        for (int i = 0; i < x.size(); i++) {

            xData[i] = Double.parseDouble(x.get(i).toString());
            yData[i] = Double.parseDouble(y.get(i).toString());
        }
        return getPearsonCorrelationScore(xData, yData);
    }
    /** * Calculation 2 Pearson correlation coefficient of an array * * @param xData * @param yData * @return */
    public static double getPearsonCorrelationScore(double[] xData, double[] yData) {

        if (xData.length != yData.length) {

            return -404; //throw new BaseException(CODE_SYSTEM_ERROR, " Pearson correlation coefficient calculation , The length of the correlation array is not equal ");
        }
        double xMeans;
        double yMeans;
        double numerator = 0; // Solving Pearson's molecule
        double denominator = 0; // Solve the denominator of Pearson coefficient
        double result = 0;
// Get the average of the two data
        xMeans = getMeans(xData);
        yMeans = getMeans(yData);
// The molecule that calculates the Pearson coefficient
        numerator = generateNumerator(xData, xMeans, yData, yMeans);
// Calculate the denominator of the Pearson coefficient
        denominator = generateDenomiator(xData, xMeans, yData, yMeans);
// Calculate Pearson's coefficient
        result = numerator / denominator;
        return result;
    }
    /** * Calculate the molecules * * @param xData * @param xMeans * @param yData * @param yMeans * @return */
    private static double generateNumerator(double[] xData, double xMeans, double[] yData, double yMeans) {

        double numerator = 0.0;
        for (int i = 0; i < xData.length; i++) {

            numerator += (xData[i] - xMeans) * (yData[i] - yMeans);
        }
        return numerator;
    }
    /** * Calculate denominator * * @param yMeans * @param yData * @param xMeans * @param xData * @return The denominator */
    private static double generateDenomiator(double[] xData, double xMeans, double[] yData, double yMeans) {

        double xSum = 0.0;
        for (int i = 0; i < xData.length; i++) {

            xSum += (xData[i] - xMeans) * (xData[i] - xMeans);
        }
        double ySum = 0.0;
        for (int i = 0; i < yData.length; i++) {

            ySum += (yData[i] - yMeans) * (yData[i] - yMeans);
        }
        return Math.sqrt(xSum) * Math.sqrt(ySum);
    }
    /** * Calculate the average of the array * * @param datas Data sets * @return The average of a given data set */
    private static double getMeans(double[] datas) {

        double sum = 0.0;
        for (int i = 0; i < datas.length; i++) {

            sum += datas[i];
        }
        return sum / datas.length;
    }
    public void test() {

        double[] x = new double[]{
                0.98, 0.96, 0.96, 0.94, 0.925, 0.9025, 0.875};
        double[] y = new double[]{
                1, 1, 1, 1, 0.961483893, 0.490591662, 0.837341784};
        double score = getPearsonCorrelationScore(x, y);
        System.out.println(score); // 0.6350393282549671
        List lx = Arrays.asList(1,2,3);
        List ly = Arrays.asList(1,2,3);
        double score2 = getPearsonCorrelationScore(lx, ly);
        System.out.println(score2); // 0.9999999999999998
    }
}
