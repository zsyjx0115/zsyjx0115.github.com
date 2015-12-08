---
layout: post
category : lessons
tagline: "Machine Learning"
tags : [EM, ML]
excerpt: 本文主要来自李航老师的《统计学习方法》和网络的参考资料总结而成的自身对EM算法的理解。
---
{% include JB/setup %}

#EM算法的整体思路和理解

本文主要来自李航老师的《统计学习方法》和网络的参考资料总结而成的自身对EM算法的理解。

##常见使用场景

EM算法是一种**迭代**算法，主要针对机器学习模型中，包含不可见的隐变量Z的模型的参数求解。

##概念解释

**观测数据 Y** 指样本可以直接观测到的随机变量的值，如身高，体重等等
**隐变量 Z**主要指的是隐藏在数据中的随机变量的数据

**这里举个例子** 假设一堆随机1W个人，测量他们的身高数据。若样本中存在男性和女性，身高分别服从 

$N\left(\mu_1, \sigma_1 \right) ,  N\left( \mu_2 , \sigma_2 \right)$，估计$\mu_1 , \sigma_1 , \mu_2, \sigma_2$ 

的值。
这里，身高数据即为我们观测到数据Y， 男性和女性为隐变量Z。
$\mu_1 , \sigma_1 , \mu_2, \sigma_2$ 就是我们要求的模型参数

##EM算法的整体框架：

**输入：**	观测变量数据**Y**， 隐藏变量数据**Z**, 联合分布$ P \left( Y,Z |\theta \right)$,	条件分布$P \left( Z|Y, \theta \right)$；
**输出：**	模型参数$\theta$
(1)、选择参数的初值$\theta^\left ( 0 \right )$ ， 这里参数随机选择，开始迭代
(2)、E步： 记 $\theta^\left( i \right)$为第i次迭代参数$\theta$的估计值， 在第 i+1 次迭代的E步，计算$$Q\left( \theta , \theta^\left( i \right) \right) = E_Z [logP(Y,Z|\theta) | Y,\theta^\left( i \right)] $$$$\ =\sum_{Z} logP\left( Y,Z\ |\  \theta  \right) P \left( Z\ |\ Y, \theta^\left(i \right)\right)$$

这里， $P(Z | Y, \theta^ \left( i\right))$ 是在给定观测数据Y和当前的参数估计$\theta^\left( i \right)$下隐变量数据Z的条件概率分布

(3)、M步：求使$Q(\theta, \theta^\left( i\right))$极大化的$\theta$,确定第i+1次迭代的参数的估计值$\theta ^\left( i+1\right)$
$$\theta^\left(i+1\right) = arg \max\limits_\theta \ Q(\theta, \theta^\left( i\right))$$

**Q函数：** $$Q(\theta, \theta^\left( i\right)) = E_Z [ln\ P(Y,Z|\theta)| Y, \theta^\left(i\right)]$$

这里，对整个EM的算法框架介绍完毕。

##隐变量Z的推导

**问题:** 为什么隐变量Z是关于观测数据Y和$\theta$的条件概率分布$P \left( Z|Y, \theta \right)$
**推导:** 观测数据Y关于参数$\theta$的对数似然函数：$$L(\theta) = log\ P(Y|\theta) = \sum \limits_{i=1}^nlog \sum \limits_Z P(y, z | \theta)$$ 
$$= \sum \limits_{i=1}^nlog (\sum \limits_Z P(Y|Z,\theta)P(Z|\theta))$$

**假设:** 假设D是隐变量Z的某一个分布，且D>=0,则有：
           $$= \sum \limits_{i=1}^n log (\sum \limits_Z P(Y|Z,\theta)P(Z|\theta))$$ 
           $$= \sum \limits_{i=1}^n log\sum \limits_Z D_i(z_i) \frac{P(y_i, z_i | \theta)}{D_i(z_i)}$$
           $$\geq \sum \limits_{i=1}^n \sum \limits_Z D_i(z_i) log \frac{P(y_i, z_i | \theta)}{D_i(z_i)}$$
           这里，我们对$L(\theta)$取下界，利用Jensen不等式，等号成立条件：
           $$\frac {P(y_i,z_i |\theta)} {D_i(z_i)} = c$$
           即 $D_i \propto P(y_i, z_i |\theta)$ 且  $\sum \limits_{z} D_i(z_i) =1$
           **推导出**
           $$D_i(Z_i) =  \frac {P(y_i, z_i|\theta)} {P(y_i,z|\theta)}$$
           $$ =\frac {P(y_i, z_i | \theta)} {P(y_i | \theta)}$$
           $$ = P(z_i|y_i, \theta)$$
**得到结论**
隐变量Z是关于y和$\theta$ 的条件概率,$D_i(Z)$的计算公式就是后验概率。
           
           

##EM算法的导出

**验证EM的正确性，取下界是正确的:**
这里，我们仍然取$L(\theta)$:
$$L(\theta) = log\ P(Y|\theta) = \sum \limits_{i=1}^nlog \sum \limits_Z P(y, z | \theta)$$ 
$$= \sum \limits_{i=1}^nlog (\sum \limits_Z P(Y|Z,\theta)P(Z|\theta))$$
我们希望通过对$L(\theta)$的迭代，逐步近似极大化$L(\theta)$的值，即$L(\theta) > L(\theta^t)$,为此，我们考虑二者的差值,这里我们隐去对$\sum \limits_{i=1}^n$：
    $$L(\theta) - L(\theta^t) = log (\sum \limits_Z P(Y|Z,\theta)P(Z|\theta)) - logP(Y|\theta^t)$$ 
    $$=log(\sum \limits_Z P(Y|Z, \theta^t) \frac {P(Y|Z, \theta) P(Z | \theta))} {P(Y|Z,\theta^t)}) - log P (Y | \theta^t)$$
    $$\geq \sum \limits_Z P (Z|Y, \theta^t) log \frac {P(Y|Z,\theta)P(Z|\theta)} {P(Z|Y,\theta^t)} - logP(Y|\theta^t)$$
    $$ = \sum \limits_Z P(Z|Y,\theta^t) log \frac{P(Y|Z,\theta) P(Z|\theta)} {P(Z|Y, \theta^t)P(Y|\theta^t)}$$
    令$B(\theta, \theta^t) =L(\theta^t) +  \sum \limits_Z P(Z|Y,\theta^t) log \frac{P(Y|Z,\theta) P(Z|\theta)} {P(Z|Y, \theta^t)P(Y|\theta^t)}$
    **则有：**
    $$L(\theta)  \geq B(\theta, \theta^i)$$
    即$B$函数是而一个下界，因此，任何以使$B$增大的$\theta$，也可以使$L$增大。
    这里，选择$\theta^\left(t+1\right)$使$B$达到最大。
    $$\theta^\left( i+1\right) = arg \max \limits_\theta l^`(\theta) $$
    $$=arg \max \limits_\theta \sum \limits_{i=1}^n \sum \limits_z Q_i log \frac {P(x,z|\theta)} {Q_i}$$
    $$= arg \max \limits_\theta \sum \limits_{i=1}^n \sum \limits_z p(z|x, \theta_t) log \frac {P(x,z|\theta)} {P(z|x,\theta_t)}$$
    $$=arg \max \limits_\theta \sum \limits_{i=1}^n \sum \limits_z p(z|x, \theta_t) log P(x,z|\theta) - p(z|x, \theta_t) {P(z|x,\theta_t)}$$
    因为$p(z|x, \theta_t) {P(z|x,\theta_t)}$中的$\theta_t$都是定值，所以在对\theta求导的时候，会消掉，
    所有只有前面这部分$arg \max \limits_\theta \sum \limits_{i=1}^n \sum \limits_z p(z|x, \theta_t) log P(x,z|\theta) $
    

         

##EM问题

似然函数对于离散情况是log概率，连续时是log的概率密度，极大似然是说出现data的概率最大，对于连续的情况怎么联系 概率密度最大 就等价概率最大

##Reference Links

[http://www.cnblogs.com/jerrylead/archive/2011/04/06/2006936.html](http://www.cnblogs.com/jerrylead/archive/2011/04/06/2006936.html)

[http://blog.csdn.net/abcjennifer/article/details/8170378](http://blog.csdn.net/abcjennifer/article/details/8170378)